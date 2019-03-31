// 1. Write a program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var a = 5
var b = 6
var c = 7
var s: Int = (a+b+c) / 2

var p1: Int = ( s - a )
var p2: Int = ( s - b )
var p3: Int =  (s - c )
var p4: Double = Double(s*(p1*p2*p3))
var area: Double = Double(p4).squareRoot()

print(area)