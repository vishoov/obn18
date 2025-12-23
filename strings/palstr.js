function pal(s){
    let srr=new Set()
  for(let i=0;i<s.length;i++)
  {
    let str=""
    for(let j=i;j<s.length;j++)
    {
      str+=s[j]

      let rev=str
      rev=rev.split("").reverse().join("")
      if(str===rev){
        srr.add(str)
      }
      // console.log(str)
    }
  }
  Array.from(srr).sort().map(ele=>console.log(ele))
}


pal('abccbc')