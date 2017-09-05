getFirstSelector(selector)
{
  var et = document.all
var found = false
var i=-1
  while(!found && i<et.length)
  {
   i++
   if(et[i]===selector)
    {
      found=true
      return et[i]
    }
  }

}
