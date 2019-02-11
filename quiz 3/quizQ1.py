# 1. Write a program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
A=(H^b*B)/2

a = 5;
b = 6;
B = 6;
c = 7;
H = 7;

Semiperimeter = ((a+b+c)*1/2);

#
Area = (Math.sqrt((Semiperimeter-a)*(Semiperimeter-b)*(Semiperimeter-c)));
console.log(Area);