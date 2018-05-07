    window.onload = function() {
        let blockContents = document.getElementsByClassName("block-content");

        blockContents = Array.from(blockContents);
        let blockHasStyle;
        blockContents.forEach(function(blockContent,index){
            blockContent.addEventListener("click", function(e){
                if(this.offsetWidth >= 717){
                    this.style.width = 400+"px";
                    return;
                }else{
                    if(typeof blockHasStyle !== "undefined"){
                        blockHasStyle.forEach(function(blockContent){
                            blockContent.style.width = 400+"px";
                        })
                    }
                this.style.width = `${this.offsetWidth+400}px`;
                blockHasStyle = blockContents.filter(function(blockContent,index){
                    return blockContent.hasAttribute("style");
                })
                console.log(this.offsetWidth);
            }
        });

    })
    }
