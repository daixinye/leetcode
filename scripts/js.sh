num=$1
path="./solving/$num.js"

ls $path

if [ $? == 0 ]
then
    node $path
fi