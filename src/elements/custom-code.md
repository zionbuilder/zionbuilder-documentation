# Custom code

![Custom code element](/assets/images/elements/custom-code.png)

## General info

The custom code element allows you to add additional HTML/CSS/JavaScript and even run PHP code in your pages.

## General options

1. ***Custom html*** - Using this option you can add your additional HTML/CSS/JavaScript code. Please note that for css and javascript code you will need to wrap the code between ```<script></script>``` or ```<style></style>``` tags.

    ```html
    <div class="myAwesomeClass">
        This text is added from custom code element
    </div>

    <style>.myAwesomeClass {
        color: red;
    }
    </style>

    <script>
    console.log('hello from custom element');
    </script>
    ```

2. ***PHP code*** - In this option you can add your PHP code. In order to apply the code inside the editor, you will need to press the "Apply" button. Please note that you will need to add your php code inside the opening and closing php tags

    ```php
    <?php

    echo "this code is added with PHP";

    ?>
    ```

    ::: warning
    By adding PHP code, this will run inside the page containing it. The code is run inside a try / catch statement in order to prevent errors, however, this doesn't catch fatal errors. try/catch blocks only work for thrown exceptions (throw Exception or a subclass of Exception must be called).
    :::

## Style options

::: tip
Zion Builder elements allows you to style almost every part of an element. All style options follow the same options structure. [You can find more info about style options here](/features/element-styles)
:::

1. **Wrapper** - Will style the wrapper of the element.

## Advanced options

::: tip
All the options inside the advanced options tab are the same for all elements. [You can find more info about advanced options here](/features/advanced-options)
:::
