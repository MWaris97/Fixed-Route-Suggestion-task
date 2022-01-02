# New Route suggestion Problem

Fixed routes can be modeled as a sequence of connected stations on a map.
This algo allow the user to submit a new fixed route suggestion, this route is a sequence of connected stations on the map.
In this problem have constructed a new route using only stations from fixed routes given only one user fixed route suggestion.
The route is constructed in such a way that for every suggested station and the corresponding chosen station from routes the distance is minimized.
Stations are represented as points in 2D plane.

## Getting Started

Clone the git repo to get started.

## Prerequisites

Node.js >= **v12.18**

Need to create an input file first, the file format is

```
2
5
A 4 5
B 5 3
C 6 5
D 7 5
E 9 3
4
F 2 4
G 4 1
H 8 3
I 8 5
```

### Input
The first line of the input consists of one integer N, the number of fixed routes in Swvl system.
The next N blocks represents fixed routes in swvl system, each block consists of an integer K followed by
K lines, each line consists of a string S and two integers X and Y the station name, x and y coordinates
respectively.
The following line consists of one integer M the number of stations in user’s suggested fixed route, each
line of the M lines consists of a string S and two integers X and Y the station name, x and y coordinates
respectively.
Note that (each station is connected to the following one in the input)

### Output
The output contains M lines, each line contains two space-separated strings S and P, the name of
the suggested station and the name of the chosen station from the system respectively.


## Run

In order to run the script, run

```
node main.js E:/Test/input.txt
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

You can refer the sampleTestData.txt and largeSizeDataSet.txt

sampleTestData.txt contains the sample data from the task
largeSizeTestData.txt contains a larger sample test data with
- 3960 Routes in the System
- 197921 Stations in the System
- 65 stations in suggested route

### Stats of 20 runs (average):

    - Sample Data:
    ```
        fileRead: 0.514ms   
        Calculation: 0.201ms
        FileWrite: 2.849ms
        Memory usage: 2.86 MB
    ```
```
    - Large Data
        fileRead: 314.730ms
        Calculation: 955.720ms
        FileWrite: 2.503ms
        Memory usage 62 MB
```
## Authors

* **Muhammad Waris**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
