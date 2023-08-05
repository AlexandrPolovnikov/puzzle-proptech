# Нажмите на ссылку для просмотра [PuzzlePropTech](https://pzl-test-server.web.app/)



Тестовое задание 

Необходимо разработать приложение для отображения рейтинга пользователей в заезде на автомобиле. Данные, необходимые для отображения на экране:
ФИО
Максимальная скорость
Время заезда в виде hh:mm:ss
Штрафное время
Рейтинг пользователя (итоговое место)
Аватарку пользователя 
Если длина ФИО превышает 35 символов, то отображаем умещающиеся символы и троеточие в конце. 

Требования:
Осуществить lazy load подгрузку данных по 50 пользователей при приближении скролла экрана к границе.
Первично отобразить 50 пользователей на экране.
Аватарки всегда должны быть на одном уровне
Должна быть адекватная скорость работы приложения при количестве пользователей на экране более 500
Сделать эмуляцию загрузки данных (отображением лоадера)
Сгенерировать данные для загрузки




Перед запуском:
# npm install  (установка зависимостей) 
# json-server --watch db.json (запуск сервера с db json)
# npm start (запуск react приложения)
