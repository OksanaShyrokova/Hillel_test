function arrDoAdd() {
    let array = []
    let sometimes = +prompt("Введіть кількість елементів");
    for (let i = 0; i < sometimes; i++) {
        let sometimes1 = +prompt("Введіть  елементи" + (i + 1));
        array.push(sometimes1);
    }
    alert(array.sort((a,b) =>  a-b ));
    alert(array.splice(2, 4));
    alert(array);

}
arrDoAdd();