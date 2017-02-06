var app=getApp()
Page({
    data:{
      title:"",
      content:""
    }
    save: function(e) {
    console.log("save---" + e.detail.value);
    },
    bindTextAreaBlur: function(e) {
      console.log(e.detail.value)
    }
})