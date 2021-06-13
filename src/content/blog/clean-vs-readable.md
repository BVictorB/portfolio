---
title: Clean vs. readable code
order: 2
---

It can sometimes be hard to decide what kind of coding 'conventions' you want to use when working on a project or when you are coding in general. Especially when working together with other developers. In my opinion clean code is the use of for example ternary operators instead of if/else statements when used properly. In JavaScript have a lot of shorthands, these shorthands make your code a lot cleaner and shorter. But they can also cause readability issues for other (less experienced) developers. Also not just for less experienced developers since these shorthands can become unreadable in general pretty quick.  
The thing to consider is that when you write 'cleaner' code, your development process might be faster and the code might be sorter, but when you have to go over old code again it might take some time to understand what it does and how it works. This might slow you down in the future.  
&nbsp;  
## Ternary operators
What first comes to mind for me when thinking about clean code is the use of ternary operators instead of if/else statements. I actually use them a lot and stopped thinking about them. But when I am helping other students with their code (as a student assistent) I notice that a lot of people have no clue what a ternary operator is. You could say that this would be their problem, since they are undereducated. But you could also write your code in a way that is easier to understand for people with a lower skill level.
```js
const number = 6
let answer

if (number > 5) {
  answer = 'The number is greater than 5'
} else {
  answer = 'The number is less than 5'
}
```  
In the example above we check the value of the number variable and (re)assign the answer variable depending on the value of the number variable. This is very easy to read and very simple for (new) JavaScript developers. But it does take us 6 lines of code instead of a single line with the use of a ternary operator.
```js
const answer = number > 5 ? 'The number is greater than 5' : 'The number is less than 5'
```  
As you can see in the example above, when using a ternary operator we can do all of this with a lot less code and just a single line. It looks cleaner in my opinion and works very well in most use cases, but it can be harder to read. This is ofcourse a very simple example, but with more complex code this changes things.
```js
$: hrefs = {
  previous: step === 1 ? '/dashboard' : `${path}?step=${+step - 1}${id ? `&id=${id}` : ''}`,
  next:
    step === 1 && canSkip
      ? [
          {
            path: id ? `/dashboard/letter/${id}/upload` : '/api/onboarding/letter',
            text: 'Uitleg overslaan',
          },
          {
            path: `${path}?step=${+step + 1}${id ? `&id=${id}` : ''}`,
            text: 'Volgende',
          },
        ]
      : [
          {
            path: `${path}?step=${+step + 1}${id ? `&id=${id}` : ''}`,
            text: 'Volgende',
          },
        ],
  finish: id
    ? [{ path: `/dashboard/letter/${id}/upload`, text: 'Verder met je brief' }]
    : [
        {
          path: '/api/onboarding/letter',
          text: 'Begrepen, upload mijn brief',
        },
      ],
}
```  
The code above is a snippet from a project that I am currently working on. It defines the url and text of an anchor depending on different conditions. As you can see we use a lot of ternary operators in this code, it might be difficult to see what is happening here for someone that did not write it. But on the other side it would be very messy to do this in any other way.  
&nbsp;  
## Variable naming
Giving variables or functions the proper names can be difficult. Something you see a lot of people do when using JavaScript methods is naming the parameter in the function something like 'x'. This makes the code a lot shorter but is not descriptive about what you are doing at all. I prefer naming the parameter in this example the singular of the name of the array of items.  
```js
items.map(x => x.price)
items.map(item => item.price)
```
Once again this is a very simple example, but when you add a lot more complexity this makes your code a lot more clear. Since you know what kind of values you are using. Naming a variable/parameter 'x' does not tell you anything about the value of the variable you are using. But naming it the singular of your array does. For example 'pages' as the name of the array and 'page' as the parameter name, since you are mapping over every single page.  
The same goes for naming functions, when writing functions you ofcourse want them to be reusable. But you also want to have a very descriptive name so you already know what the function is going to do before actually reading the code that is contained in the function.
```ts
const toCamelCase = (str: string) => (
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word: string, index: number) => (
    index === 0 ? word.toLowerCase() : word.toUpperCase()
  )).replace(/\s+/g, '')
)
```
In the example above is a function called 'toCamelCase', this function name is very descriptive and tells you what the function does without actually having to read the code. Using things like 'get' or 'to' tells you what the use of the function. I also often use things like 'calc' or 'round' in front of functions that do any kind of calculation (for example roundNumber/roundNum or calcDistance/calcDist).  
&nbsp;  
## In conclusion
There are a lot of ways to write your JavaScript shorter, but this is not always the right thing to do. It is something that everyone has a different opinion on, there is not one 'correct' way to write JavaScript. In my opinion it is something that you have to agree upon with your team members. A great solution is using a linter and writing your own config for it, if the whole team uses the same config most of the code will follow the same conventions. This way you mainly have to focus on the functionality of the code, the linter will take care of the way your code is written.  
&nbsp;  
