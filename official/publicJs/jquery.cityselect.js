/*
 Ajax 涓夌骇鐪佸競鑱斿姩
 鏃ユ湡锛�2012-7-18

 settings 鍙傛暟璇存槑
 -----
 url:鐪佸競鏁版嵁josn鏂囦欢璺緞
 prov:榛樿鐪佷唤
 city:榛樿鍩庡競
 dist:榛樿鍦板尯锛堝幙锛�
 nodata:鏃犳暟鎹姸鎬�
 required:蹇呴€夐」
 ------------------------------ */
(function($){
    $.fn.citySelect=function(settings){
        if(this.length<1){return;};

        // 榛樿鍊�
        settings=$.extend({
            url:"js/city.min.js",
            prov:null,
            city:null,
            dist:null,
            nodata:null,
            required:true
        },settings);

        var box_obj=this;
        var prov_obj=box_obj.find(".prov");
        var city_obj=box_obj.find(".city");
        var dist_obj=box_obj.find(".dist");
        var prov_val=settings.prov;
        var city_val=settings.city;
        var dist_val=settings.dist;
        var select_prehtml=(settings.required) ? "" : "<option value=''>璇烽€夋嫨</option>";
        var city_json;

        // 璧嬪€煎競绾у嚱鏁�
        var cityStart=function(){
            var prov_id=prov_obj.get(0).selectedIndex;
            if(!settings.required){
                prov_id--;
            };
            city_obj.empty().attr("disabled",true);
            dist_obj.empty().attr("disabled",true);

            if(prov_id<0||typeof(city_json.citylist[prov_id].c)=="undefined"){
                if(settings.nodata=="none"){
                    city_obj.css("display","none");
                    dist_obj.css("display","none");
                }else if(settings.nodata=="hidden"){
                    city_obj.css("visibility","hidden");
                    dist_obj.css("visibility","hidden");
                };
                return;
            };

            // 閬嶅巻璧嬪€煎競绾т笅鎷夊垪琛�
            temp_html=select_prehtml;
            $.each(city_json.citylist[prov_id].c,function(i,city){
                temp_html+="<option value='"+city.n+"'>"+city.n+"</option>";
            });
            city_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
            distStart();
        };

        // 璧嬪€煎湴鍖猴紙鍘匡級鍑芥暟
        var distStart=function(){
            var prov_id=prov_obj.get(0).selectedIndex;
            var city_id=city_obj.get(0).selectedIndex;
            if(!settings.required){
                prov_id--;
                city_id--;
            };
            dist_obj.empty().attr("disabled",true);

            if(prov_id<0||city_id<0||typeof(city_json.citylist[prov_id].c[city_id].a)=="undefined"){
                if(settings.nodata=="none"){
                    dist_obj.css("display","none");
                }else if(settings.nodata=="hidden"){
                    dist_obj.css("visibility","hidden");
                };
                return;
            };

            // 閬嶅巻璧嬪€煎競绾т笅鎷夊垪琛�
            temp_html=select_prehtml;
            $.each(city_json.citylist[prov_id].c[city_id].a,function(i,dist){
                temp_html+="<option value='"+dist.s+"'>"+dist.s+"</option>";
            });
            dist_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
        };

        var init=function(){
            // 閬嶅巻璧嬪€肩渷浠戒笅鎷夊垪琛�
            temp_html=select_prehtml;
            $.each(city_json.citylist,function(i,prov){
                temp_html+="<option value='"+prov.p+"'>"+prov.p+"</option>";
            });
            prov_obj.html(temp_html);

            // 鑻ユ湁浼犲叆鐪佷唤涓庡競绾х殑鍊硷紝鍒欓€変腑銆傦紙setTimeout涓哄吋瀹笽E6鑰岃缃級
            setTimeout(function(){
                if(settings.prov!=null){
                    prov_obj.val(settings.prov);
                    cityStart();
                    setTimeout(function(){
                        if(settings.city!=null){
                            city_obj.val(settings.city);
                            distStart();
                            setTimeout(function(){
                                if(settings.dist!=null){
                                    dist_obj.val(settings.dist);
                                };
                            },1);
                        };
                    },1);
                };
            },1);

            // 閫夋嫨鐪佷唤鏃跺彂鐢熶簨浠�
            prov_obj.bind("change",function(){
                cityStart();
            });

            // 閫夋嫨甯傜骇鏃跺彂鐢熶簨浠�
            city_obj.bind("change",function(){
                distStart();
            });
        };

        // 璁剧疆鐪佸競json鏁版嵁
        if(typeof(settings.url)=="string"){
            $.getJSON(settings.url,function(json){
                city_json=json;
                init();
            });
        }else{
            city_json=settings.url;
            init();
        };
    };
})(jQuery);