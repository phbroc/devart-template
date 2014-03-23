# PAN ZOOM SPLIT
In a circus sideshow it's possible to see many acrobats doing the same thing at the same time. It gives a fantastic visual effect. 

![Acrobats](../project_images/9962624_5ccd1cf9b2_z.jpg?raw=true "Acrobats")
Photo by [Today is a good day](https://www.flickr.com/photos/good_day/) on Flickr

## Doing the same thing in my project (whaouw) !
At the moment, I am still using the same parametric equation for drawing a continuous line. But following this idea of multiple acrobats, I have added keyboard actions which split the curve in lines and columns. 

![Lines and columns](../project_images/curve04.jpg?raw=true "Lines and columns")
Ooops, it looks like DevArt default background !!! Never mind.

There are four more parameters now, splitVnumber, splitVheight, splitHnumber splitHwidth :

```
  double yFormula(double t) {
  	// parametric equation
    var retValue = sin(t) + aParam.value*sin(bParam.value*t);
    
    /* 
    splitVheight is vertical height between lines
    splitVnumber is the number of lines
    Using floorToDouble(), it creates a stairway, 0, 1, 2, 3 lines etc... 
    */
    
    retValue += splitVheight.value *(((splitVnumber.value *t *0.99) / maxT.value).floorToDouble() - 0.5*(splitVnumber.value - 1));
    return retValue;
  }

  double xFormula(double t) {
  	// parametric equation
    var retValue = cos(t) + aParam.value*cos(bParam.value*t);
    
    /* 
    splitHwidth is horizontal width between columns
    splitHnumber is the number of columns
    */
    
    retValue += splitHwidth.value *(((splitHnumber.value *splitVnumber.value *t *0.99) / maxT.value).floorToDouble() - 0.5*(splitHnumber.value - 1));
    // each new line the curves have to start in first column
    retValue -= splitHwidth.value *(((splitVnumber.value *t *0.99) / maxT.value).floorToDouble()) *(splitHnumber.value);
    return retValue;
  }
```

## At the end there is the ring
In post number 5, I was talking about the ring. The drawing begins with the circus ring. Now initial parameters are memorized. If no one is updating the curve within ten seconds, the system gets back to these initial parameters automatically. This way back animation can show strange results...

## New live capture
In the video below, I am using the new feature of splitting the curve.

https://www.youtube.com/watch?v=e3ot0oZ4T4c


That's all for my post number 8. 5 days to go !