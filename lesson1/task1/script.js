// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину 
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.
// 2. При закрытии страницы (вкладки), необходимо выводить 
// всплывающее окно или диалоговое окно браузера и 
// спросить, уверен ли пользователь, что хочет покинуть 
// страницу?
// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

console.log(window.innerHeight + " " + window.innerWidth);
console.log(document.documentElement.clientHeight + ' ' + document.documentElement.clientWidth);
console.log(screen.availWidth + " " + screen.availHeight);


const sizeEl = document.querySelector('.size');
function printSize() {
    sizeEl.textContent = `${window.innerHeight} x ${window.innerWidth}`
}
printSize()

window.addEventListener('resize', function () {
    printSize()
});

