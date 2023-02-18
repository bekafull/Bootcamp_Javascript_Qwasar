
function my_string_index(param_1, param_2) {
let index = 0
while (index < param_1.length){
    if (param_1[index] == param_2){
        return index;
    }
index +=1
}
return -1
};