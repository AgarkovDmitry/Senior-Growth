export const paradigms = {
  id: 'paradigms',
  name: 'Programing Paradigms',
  questions: [
    {
      question: 'Object oriented programming, pros/cons',
      answer: 'TBD',
      children: [
        {
          question: 'Encapsulation',
          answer: 'TBD',
        },
        {
          question: 'Abstraction',
          answer: 'TBD',
        },
        {
          question: 'Inheritance',
          answer: 'TBD',
        },
        {
          question: 'Polymorphism',
          answer: 'TBD',
        },
        {
          question: 'Dependency injection',
          answer: 'TBD',
        },
        {
          question: 'Pros/Cons',
          answer: 'TBD',
        },
      ],
    },
    {
      question: 'Functional programming, pros/cons',
      answer: 'TBD',
      children: [
        {
          question: 'Side effects',
          answer:
            'Side effect means that someone tries to influence outer environment',
        },
        {
          question: 'Pure functions',
          answer:
            'Function can be called pure, if it does not have side effects and its result depends only on provided arguments',
        },
        {
          question: 'Functions as first-class entities',
          answer:
            'This is a feature, which allows functions to be access as a variable',
        },
        {
          question: 'Functions composition',
          answer:
            'This is a process of combining several functions in order to create new function. f(g(x))',
        },
        {
          question: 'High order functions',
          answer:
            'High order function is a function, which takes different function/component, then does some work and pass result of this work into received function. For example HOC can access context and pass it into provided component',
        },
        {
          question: 'Recursion',
          answer:
            'This is a feature, which function to call itself inside its body',
        },
        {
          question: 'Currying/Partial Application',
          answer:
            'This is an approach, where we replace single function with function which returns function, allowing to pass portion of arguments to the inner function and second portion to outer one',
        },
        {
          question: 'Memorization',
          answer:
            'This a process, of saving result of function execution and reusing it instead of recalculation. This is possible if we have pure functions, which will always return same value for the same arguments',
        },
        {
          question: 'Pros/Cons',
          answer: 'TBD',
        },
      ],
    },
    {
      question: 'Reactive programming (eg. RXJS), pros/cons',
      answer: 'TBD',
      children: [
        {
          question: 'Streams',
          answer: 'TBD',
        },
        {
          question: 'Merging',
          answer: 'TBD',
        },
        {
          question: 'Writing declarative code',
          answer: 'TBD',
        },
        {
          question: 'Avoiding callback hell',
          answer: 'TBD',
        },
        {
          question: 'Threading',
          answer: 'TBD',
        },
        {
          question: 'Asynchronous mechanisms implementation',
          answer: 'TBD',
        },
        {
          question: 'Pros/Cons',
          answer: 'TBD',
        },
      ],
    },
  ],
}
