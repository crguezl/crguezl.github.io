---
title: 'Challenges On The Interactive Nature of Computing'
date: 2021-02-04
permalink: /posts/2021/02/ptm
tags:
  - Persistent Turing Machines
  - Church Turing Thesis
---

## Problem: The Asynchronous Sum (ASP)

Write an Ordinary Turing machine that adds two numbers in unary.
The machine has three tapes:

1. The first is an input tape
2. The second is the tape for computing
3. The third will be used for output

The following considerations apply:

* Numbers (coded in unary) are'nt in the  input tape at the beginning of computation
* Instead, the ones and separators are entered in asynchronous/unknown times with an encoding like the one below to add 3 and 4

   ``` 
   111X1111X
   ``` 
   (3 ones, an `X` that acts as a separator, 4 ones and an `X`)
* The ones `1` and the` X` can be written at any time after the computation starts.
* Of course when they have not been written the cell contains a blank
* The rest of the tape is filled with white
* The machine in addition to being able to move its read/write heads to the left (`L`) and right (` R`) is endowed with a capacity of **NO** movement `S`

## Problem: Driving home from work (DHFWP)

**Describe** (Only describe!) a Turing Machine that drives a car to home from work, where the locations of both work and home are provided as input parameters.

You can add as many input tapes (read only) as you want. 
* One for a detailed map, 
* another for the current weather report, 
* another for the images of the camera, 
* another for the information from the wheels, 
* etc.

As in the previous problem the information arrives asynchronously and the machine can keep the heads stationary.

The output tapes of of this problem should be two time series:

* One that shows the position of the wheel (e.g., in degrees from the vertical) during the drive, and 
* Another to show the pressure on the gas and break pedals during the drive.

## Solutions 

Give your solution in the comments below. You have to autheticate with GitHub. 
Use  markdown to format your comments.

## References

* [The Church-Turing Thesis: Breaking the Myth](https://www.researchgate.net/publication/221652812_The_Church-Turing_Thesis_Breaking_the_Myth) by Dina Goldin and Peter Wegner.
Lecture Notes in Computer Science 3526:152-168

* [The Interactive Nature of Computing: Refuting the Strong Church–Turing Thesis](https://link.springer.com/article/10.1007/s11023-007-9083-1) by Dina Goldin and Peter Wegner in *Minds and Machines volume 18, pages17–38(2008)*
* [Wikipedia: Turing Machine](https://en.wikipedia.org/wiki/Turing_machine)
