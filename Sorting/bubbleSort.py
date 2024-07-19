from functools import *

def bubbleSort(arr):
    length = len(arr)

    for i in range(length):
        for j in range(length-1-i):
            count += 1
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]

    return arr

arr = [34,12,4,222,32,9,10,3]
print(bubbleSort(arr))
        