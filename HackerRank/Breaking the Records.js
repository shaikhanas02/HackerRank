function breakingRecords(scores) {
    let minPoint = 0 ;
    let maxPoint = 0 ;
    let maxValue = scores[0] ;
    let minValue = scores[0] ;
    
    for(let i = 0 ; i< scores.length ; i++){
        if(scores[i]< minValue){
            minValue = scores[i] ;
            minPoint++ ;
        } 
        else if(scores[i]> maxValue){
            maxValue = scores[i]
            maxPoint++ ;
        }
         
    }
   let ans = [maxPoint, minPoint] ;
   
   return ans ; 
        
}