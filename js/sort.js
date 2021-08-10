//bubble sort algo

bubbleSort.addEventListener("click", bubble_sort);

function bubble_sort()
{
    delay = 0;
    set_heights()
    for(i=0;i<size-1;i++)
    {
        for(j=0;j<size-1-i;j++)
        {
            div_update(elements[j], elements[j+1], heights[j], heights[j+1],"#6ef07d");
            if(heights[j]>heights[j+1])
            {
                div_update(elements[j], elements[j+1], heights[j], heights[j+1],"#e85d54");
                div_update(elements[j], elements[j+1], heights[j+1], heights[j],"#e85d54");
                var temp = heights[j];
                heights[j] = heights[j+1];
                heights[j+1] = temp;
            }
            div_update(elements[j], elements[j+1], heights[j], heights[j+1],"purple");
        }
        update_color(elements[size-i-1])
    }
    update_color(elements[0]);
}

//quicksort algo


quickSort.addEventListener("click", qs);
function qs(){
    delay = 0;
    heights = [];
    set_heights();
    quick_sort(0, size-1);
    update_all_colors(0, size-1, sortedColor);
}

function partition(start, end){
    var i = start;
    var j = end;
    var temp;
    while(i<j){
        
        while(i<=end && heights[i] <= heights[start]){
            update_color(elements[i], baseColor)
            i++;
            update_color(elements[i], processingColor)
        }
        
        update_color(elements[j], baseColor);

        while(j>=0 && heights[j] > heights[start]){
            update_color(elements[j], baseColor);
            j--;
            update_color(elements[j], processingColor);
        }
        if(i<j){
            temp = heights[i];
            heights[i] = heights[j];
            heights[j] = temp;
            div_update(elements[i], elements[j], heights[i], heights[j], swappingColor);
            div_update(elements[i], elements[j], heights[i], heights[j], baseColor); 
        }
        else{
            update_color(elements[i], baseColor);
            update_color(elements[j], baseColor);
            break;
        }
    }
    temp = heights[j];
    heights[j] = heights[start];
    heights[start] = temp;
    div_update(elements[start], elements[j], heights[start], heights[j], swappingColor);
    update_color(elements[start], baseColor);
    update_color(elements[j], sortedColor);
    return j;
}
 
function quick_sort(start, end){
    if(start>=end){
        if(start == end){
            update_color(elements[start], sortedColor);
        }
        return;
    }
    var pivot = partition(start, end);
    quick_sort(start, pivot-1);
    quick_sort(pivot+1, end);
}


// merge sort algo

mergeSort.addEventListener("click", ms);

function ms(){
    delay = 0;
    heights = [];
    set_heights();
    merge_sort(0, size-1);
}

function merge(start, mid, end){
    update_all_colors(start, end, processingColor);
    var i, j, k;
    i = start;
    j = mid+1;
    var arr = [];
    while(i<=mid && j <= end){
        if(heights[i] <= heights[j]){
            arr.push(heights[i]);
            i++;
        }
        else{
            arr.push(heights[j]);
            j++;
        }
    }
    while(i<=mid){
        arr.push(heights[i]);
        i++;
    }
    while(j<=end){
        arr.push(heights[j]);
        j++;
    }
    i = 0;
    for(var k = start;k<=end;k++){
        heights[k] = arr[i];
        i++;
    }
    i = 0;
    for(var k = start;k<=end;k++){
        merge_update(elements[k], arr[i], sortedColor);
        i++;
    }
}
function merge_sort(start, end){
    if(start>=end)
        return;
    var x = (start+end)/2
    var mid = Math.floor(x);
    merge_sort(start, mid);
    merge_sort(mid+1, end);
    merge(start, mid, end);
}


// selection sort algo

selectionSort.addEventListener("click", selection_sort);

function selection_sort(){ 
    delay = 0;
    set_heights();
    var min;
    for(i=0;i<size-1;i++){
        min = i;
        update_color(elements[i],swappingColor);
        for(j=i+1;j<size;j++){
            update_color(elements[j],processingColor);
            if(heights[min] > heights[j]){
                if(min != i){
                    update_color(elements[min], baseColor);
                }
                min = j;
                update_color(elements[min],swappingColor);                
            }
            else{
                update_color(elements[j],baseColor);
            }
        }
        if(i != min){
            var temp = heights[i];
            heights[i] = heights[min];
            heights[min] = temp;
            div_update(elements[i], elements[min], heights[i], heights[min],swappingColor);
            update_color(elements[min], baseColor);
        }
        update_color(elements[i], sortedColor);   
    }
    update_color(elements[size-1],sortedColor)   
}

