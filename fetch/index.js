const https = require('https')
const fs = require('fs')
const PATH = './'
const EXPIRES = 24 * 60 * 60 * 1000

void function main() {
    const problem_id = Number(process.argv[2])
    if (Number.isNaN(problem_id))
        return console.error('> invalid parameter: %s', process.argv[2])
    
    console.log('> fetching problem list ...')
    // 检查缓存
    let cache
    try {
        cache = fs.readFileSync('./cache/list.json',{
            encoding: 'utf-8'
        })
        cache = JSON.parse(cache)
    }catch(e){
        cache = null
        console.log('> cache not found or expired ...')
        console.log('> downloading problem list ...')
    }

    if (cache && Date.now() - cache.expires < 0) {
        console.log('> cache found ...')
        getProblem(cache.list, problem_id)
    } else {
        const url = 'https://leetcode.com/api/problems/all/'
        https.get(url, res => {
            res.setEncoding('utf8')
            let html = ''

            res.on('data', chunk => html += chunk)
            res.on('end', () => {
                let list = JSON.parse(html)
                getProblem(list, problem_id)
                fs.writeFile('./cache/list.json', JSON.stringify({
                    expires: Date.now() + EXPIRES,
                    list: list
                }), err => console.log(err))
            })
        }).on('error', e => console.log(e))
    }
}()

function getProblem(list, id) {
    let problems = list.stat_status_pairs
    let problem
    problems.some(p => {
        if (p.stat.question_id == id) {
            problem = p
            return true
        }
    })

    let url = `https://leetcode.com/problems/${problem.stat.question__title_slug}/description/`
    console.log('> fetching problem %s , url: %s', id, url)

    https.get(url, res => {
        let html = ''
        res.on('data', chunk => html += chunk)
        res.on('end', () => {
            let p = /{'value': 'javascript'[\s\S]*?},/g
            let codeDefinition = html.match(p)[0].slice(0, -1)
            codeDefinition = codeDefinition.split("'")
            codeDefinition = codeDefinition[codeDefinition.length - 2]
            codeDefinition = codeDefinition.replace(/\\u000D/g, '\u000D')
            codeDefinition = codeDefinition.replace(/\\u000A/g, '\u000A')
            codeDefinition = codeDefinition.replace(/\\u003D/g, '\u003D')
            codeDefinition = codeDefinition.replace(/\\u003B/g, '\u003B')
            console.log('> saving: %s', `${PATH}${problem.stat.question__title_slug}.js`)
            fs.writeFile(`${PATH}${id}.${problem.stat.question__title_slug}.js`, render(codeDefinition), function (err) {
                if (err) console.log(err)
                console.log('> done')
            })
        })
    })
}

function render(codeDefinition, ) {
    return `
${codeDefinition}

void function test(f){
    const mock = [
        [0],
    ]

    mock.forEach(function(item, index, array) {
        var start = new Date()
        console.log('#',index+1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null,item))
        console.log('time: %s',new Date() - start)
        console.log()
    })
}()
    `
}