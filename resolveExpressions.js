const resolveExpressions = {};

resolveExpressions.PRIORETETS = {
    '(': 0,
    ')': 0,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
};

resolveExpressions.EXPRESSIONS = {
    '+': (a, b) => { return a+b },
    '-': (a, b) => { return a-b },
    '*': (a, b) => { return a*b },
    '/': (a, b) => { return a/b },
};