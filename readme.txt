Required: Node.js v12.18.3.
----------------------------
Usage: node main.js E:/Test/input.txt

sampleTestData.txt contains the sample data from the task
largeSizeTestData.txt contains a larger sample test data with
- 3960 Routes in the SWVL System
- 197921 Stations in the SWVL System
- 65 stations in suggested route

Stats of 20 runs (average):

    - Sample Data:
        fileRead: 0.514ms   
        Calculation: 0.201ms
        FileWrite: 2.849ms
        Memory usage: 2.86 MB

    - Large Data
        fileRead: 314.730ms
        Calculation: 955.720ms
        FileWrite: 2.503ms
        Memory usage 62 MB