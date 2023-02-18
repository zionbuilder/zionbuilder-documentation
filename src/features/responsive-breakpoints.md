# Responsive breakpoints

![Responsive Breakpoints](/assets/images/responsive-breakpoints.gif)

With Zion Builder you can style your page based on the device width. This is a great way to create pixel perfect websites that look good on any device.

::: tip
With [Zion Builder PRO](https://zionbuilder.io/pricing) you can create additional responsive breakpoints.
:::

## General info

While editing the page with Zion Builder, you can change the active responsive breakpoint from the device icon from the main bar. While hovering this icon, a list of available responsive breakpoints will appear allowing you to set the active breakpoint device or edit the breakpoint list by adding or modifying the existing breakpoints.

This popup also allows you to change the preview window width and scale to better suit your desired workflow.

When selecting a responsive device, some options will be applied only for the selected device. All the options from the ***Style*** tab from the element options will take in consideration the active responsive device. Additionally, some options that apply their value based on the active responsive device will show a responsive devices next to the option title.

<!-- markdownlint-disable-next-line no-inline-html -->
## Editing breakpoints <Badge type="tip" text="PRO" />

::: tip
Breakpoints are saved globally on your website. When you change the breakpoint width value, the css cache is automatically regenerated to reflect the change
:::

1. Hover over the breakpoint icon from the main bar
2. Press the ***edit breakpoints*** button
3. Press the ***pencil*** icon that appears on the right of your existing breakpoints
4. Set the new breakpoint width value
5. Save the change by pressing ***enter*** key on the keyboard or press the ***checkmark*** icon

<!-- markdownlint-disable-next-line no-inline-html -->
## Adding new breakpoint <Badge type="tip" text="PRO" />

1. Hover over the breakpoint icon from the main bar
2. Press the ***edit breakpoints*** button
3. Press the ***Add breakpoint*** button that appears at the bottom
4. Set the breakpoint width value
5. Save the change by pressing ***enter*** key on the keyboard or press the ***checkmark*** icon

<!-- markdownlint-disable-next-line no-inline-html -->
## Deleting custom breakpoints <Badge type="tip" text="PRO" />

::: warning
Breakpoints are saved globally. If you delete a custom breakpoint that is used in a different page, it will stop working after deleting it.
:::

1. Hover over the breakpoint icon from the main bar
2. Press the ***edit breakpoints*** button
3. Press the ***trash can*** icon that appears on the right side of your custom breakpoints

## Change preview width

Zion Builder allows you to change the preview width so you can check how your website would look like in a different device width.

In order to change the device width, you will have to:

1. Hover over the breakpoint icon from the main bar
2. Change the preview width from the preview width field ![preview width](/assets/images/preview-width.jpg)

::: tip
The preview width is not saved to the database. It will revert back to the default width of the selected device when you refresh the page or change the active responsive device
:::

## Change the preview window scaling

This allows you to show a horizontal scrollbar inside the preview window or scale the preview window content to match the browser/active device width.

How to chang the preview window scale:

1. Hover over the breakpoint icon from the main bar
2. If the scale is ***locked*** ( blue lock ) the scale factor is disabled and the preview window will be automatically calculated based on the available space for the preview window. If the scale is not locked, you have the ability to select your desired preview window scale factor.
