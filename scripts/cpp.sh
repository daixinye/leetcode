num=$1
path="./solving/$num.cpp"
temp_path="./temp/$num"

ls $path

if [ $? == 0 ]
then
    g++ $path -o $temp_path

    if [ $? == 0 ]
    then
        xargs | $temp_path
    fi
fi