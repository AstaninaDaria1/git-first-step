# Инструкция по GIT и Linux командам

## Работа с Linux

* Чтобы создать папку с именем `folder-name`набираем в командной строке `mkdir folder-name`

Codeblock:
    
    mkdir "test" / Создаем папку

    cd "test" / Перейти в папку

### Работа с Vim
в unix-среде существует достаточно сложный, но гибкий и функциональный текстовый редактор под названием Vim (Vi improved). Работа в нем сложна для начинающих пользователей, поэтому понадобится следующая инструкция:

* Создать или редактировать файл с именем *README.md*

             vim README.md

* Режимы в Vim:
    * Основной режим - его также называют нормальмым режимом. Тот режим в котором вы можете выполнять команды. Основной режим, в который переходит Vim после запуска
    * Режим вставки — это режим, в котором вы можете набирать нужный текст.
    * Визуальный режим — это где вы визуально выбираете часть текста, которую нужно обработать командой/операцией.
    
## Как отсюда выйти?
Часто задаваемые вопросы при работе с Vim это:
    * Как отсюда выйти
              и
    * Как сохранить файл?
Для начала нужно выйти из режима вставки, для этого нажимаем кнопку Escape и для выхода вводим команду

        :q
        
Чтобы выйти и сохранить файл в командную строчку вводим

        :wq
       
## Загрузка файла на  GITHUB
Для того, чтобы "заpushить" наш файл на GITHUB, нужно ввести данные команды

        git add README.md/ Подготовка файла к коммиту
        
        git status/ Проверка состояния файла
        
        git commit -m "Ваш комментарий к записям"/ Добавление комментария к изменениям
        
        git push/ Загрузка файла на GITHUB
      
Далее заходим на GITHUB, обновляем страницу с репозиторием и, если вы правильно ввели команды, то ваши изменения загрузятся на сайт
    
##Работа с GIT
Git — это очень популярная система контроля версий и совместной разработки проектов с открытым исходным кодом. С помощью Git вы можете отслеживать изменения в исходном коде своих проектов, возвращать предыдущие версии в случае критических ошибок, а также делиться своим кодом со всеми желающими и принимать от них исправления.

Это мощная система, которая позволяет оптимизировать работу над вашими проектами. Здесь нет каких-либо требований к языку или структуре файлов, поэтому у разработчиков полная свобода действий. В этой статье мы рассмотрим как пользоваться git для начинающих пользователей. Рассмотрим все очень подробно, начиная от настройки, и до ветвей проектов.

Сначала рассмотрим опции, они влияют на работу всей утилиты:

    *-C — использовать указанную папку репозитория вместо текущей папки;
    *-c параметр=значение — использовать указанное значение параметра конфигурации;
    *-p — прокручивать весь вывод с помощью less;
Теперь рассмотрим команды git, их немного больше и именно с помощью них вы будете выполнять все основные действия:

    *add — добавить файл или папку в репозиторий git;
    *am — применить все патчи из email;
    *archive — создать архив файлов;
    *bisect — использовать бинарный поиск для поиска нужного коммита;
    *branch — управление ветками проекта;
    *bundle — перемещение объектов и ссылок в архиве;
    *checkout — переключение между ветками;
    *cherry-pick — внести изменения в уже существующие коммиты;
    *clean — удалить все неотслеживаемые файлы и папки проекта;
    *clone — создать копию удаленного репозитория в папку;
    *commit — сохранить изменения в репозиторий;
    *diff — посмотреть изменения между коммитами;
    *fetch — скачать удаленный репозиторий;
    *init — создать репозиторий;
    *merge — объединить две ветви;
    *pull — интегрировать удаленный репозиторий с локальным;
    *push — отправить изменения в удаленный репозиторий;
    *tag — управление тегами;
    *worktree — управление деревнями разработки.
## Работа с Markdown
**Markdown** - язык разметки, с помощью которого написана данная документация. На нем написано большинство простых инструкций  для программистов и системный администраторов. Это просто язык разметки, который позволяет выделять определенные части текста с помощью нескольких видов выделений:

* Список
    * Маркированный список. Может Обозначаться как знаком `*`, так знаком `+` и `-`

      * Первый элемент
      + Второй элемент
      - Третий элемент

    * Нумерованный список
Нумерованный список можно создать двумя способами:
    1. Нумеровать список самостоятельно(1,2,3,4 и т.д)
    2. Использовать автоматическое нумерование(если вы будете нумеровать список однерками(1,1,1,1, и т.д), то Vim будет автоматически нумеровать ваш список




