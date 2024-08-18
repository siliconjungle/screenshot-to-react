# screenshot-to-code README

This project is a Visual Studio Code extension that converts screenshots of websites into React code. The extension uses the Open AI API for image recognition & code generation.
 
It also uses Color Thief to extract the color palette from the screenshot and apply it to the generated code using a simple color matching algorithm.

## Examples

Twitter card:

<img width="593" alt="Screenshot 2024-08-17 at 8 42 41 PM" src="https://github.com/user-attachments/assets/8eae1549-e64c-4dbd-a727-7332c0ecd730">

Becomes this:

<img width="638" alt="Screenshot 2024-08-17 at 10 03 42 PM" src="https://github.com/user-attachments/assets/d7f0af53-379a-4956-a9e7-a61a86510e69">

Github comment:

<img width="1033" alt="Screenshot 2024-08-17 at 10 04 14 PM" src="https://github.com/user-attachments/assets/d2f771dd-8e4d-4001-a798-b06d7343e77b">

Becomes this:

<img width="830" alt="Screenshot 2024-08-17 at 10 05 47 PM" src="https://github.com/user-attachments/assets/df5f6189-5fab-40de-8d6b-7d450c92fb45">

## Extension UI

<img width="753" alt="Screenshot 2024-08-17 at 10 06 00 PM" src="https://github.com/user-attachments/assets/b01637e6-8d0f-4205-81c6-5d6232352618">

<img width="841" alt="Screenshot 2024-08-17 at 10 06 07 PM" src="https://github.com/user-attachments/assets/7f3bfb0a-215e-49d1-9ec8-1a7c352ba7bb">

## Future

This is a really basic implementation of the idea. In the future, I'd like to extend it to segment the UI into different regions for more accurate color picking.

I'd also like to use more specific models for identifying fonts. I think borders radius's could use a more procedural technique.

The color replacement is also just using a simple regex, where as if I could step through the AST I'd have a lot more flexibility for how the code should be updated.

A question may come up around why this is a vscode extension & not just a stand alone website. I think a tool like this could lean into your existing settings for stylistic preferences such as language, framework, tabs / spaces, semicolons, etc. Being a part of the core tool as well would reduce the friction in code generation and could allow for generation of code in place in the editor within an existing project.

I'm also thinking a bit about the UX patterns for how things like color palettes, fonts, etc are chosen. Right now, it's automatic, but it would be nice to show on the image where the colors are being picked from, with the ability to drag them around and adjust it (as well as add / remove colors that may be reducing the quality of the results).

I think there's room to explore how these styles could be populated from existing styles in the codebase as well (e.g. lets get the structure from the tweet but apply my own fonts & colors, etc).
