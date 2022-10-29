#returns function pair(f) => f(a,b), with a and b stored as 3 and 4
#through stored closure or the "scope of a nested function"
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

#takes pair() and passes it return_first to return a
def car(pair):
    def return_first(a,b):
        return a
    return pair(return_first)

#same but for b
def cdr(pair):
    def return_last(a,b):
        return b
    return pair(return_last)

print(car(cons(3, 4)))
print(cdr(cons(3, 4)))