# Техническое задание проекта Nerds
https://benuelbertran.github.io/nerds/

## Общие технические требования

* Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
* Сетка: определена в макете.
* Адаптивность вёрстки: нет.
* Используемые фреймворки: нет.
* Кроссбраузерность: IE10+, Chrome, Firefox, Opera, Safari.
* Типографика: частично определена в макете.
* Используемые шрифты: Roboto.

С макетом предоставлен styleguide.psd, содержащий прорисовку состояний элементов интерфейса. При любых расхождениях с макетами он должен иметь наивысший приоритет.

С макетом предоставлен иконочный шрифт, нужно использовать его в вёрстке. Названия слоёв с иконками соответствуют CSS-классам иконок.

### Пожелания к поведению блоков

#### Все макеты:

* Контентная область центрируется и не может быть уже макетной ширины.
* Логотип - это ссылка на главную страницу.
* Блок карты - достаточная реализация - обычное изображение.
* Блок карты - реализация по желанию - интерактивная карта (Google\Яндекс), высота карты постоянная, ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер, центр карты соответствует центру блока в макете.
* Блок карты: по клику на кнопку «напишите нам» возникает модальное окно с формой отправки сообщения.

#### nerds-index.psd:

* Карусель под основной навигацией: смена слайдов мгновенная, без промежуточных переходов.

#### nerds-catalog.psd:

* Блок «Стоимость» - при наведении на любой из маркеров появляется указатель `cursor: pointer`, делать маркеры подвижными не обязательно, цена меняться не должна.
* Фильтр (блоки «Сетка», «Особенности») выполнен в виде формы, кнопка «Показать» отвечает за отправку формы, при выключенном JavaScript должен осуществляться переход на отдельную страницу.
* Карточка товара: название товара является ссылкой.
* Количество товаров в правом блоке может быть любым.
