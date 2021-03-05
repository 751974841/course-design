//创建老师卡片
function findClassCard(ul_id,teacher_name, img_path,teacher_Subject) {
    this.ul_id = ul_id;
    this.teacher_name = teacher_name;
    this.img_path = img_path;
    this.teacher_Subject = teacher_Subject;
    
    if (typeof this.addElementCard != "function") {
        findClassCard.prototype.addElementCard = function () {
            let ul = document.getElementById(this.ul_id);
            console.log(ul);
            let li_class_card = document.createElement("li");
            ul.appendChild(li_class_card);
            //老师资料大盒子
            let class_card_div = document.createElement("div");
            
            class_card_div.className = "courses_tutor";
            li_class_card.appendChild(class_card_div );
            //老师科目文字盒子
            let distance_left=0;
            let distance_top=5;
            let box_size_map=new Map()
            box_size_map.set(2,35);
            box_size_map.set(3,47);
            box_size_map.set(4,58);
            box_size_map.set(5,71);
            let img_size_width=138;
            let img_size_height=96;
            for (const techer_subject_obj of this.teacher_Subject){
                let teacher_card__tab = document.createElement("div");
                teacher_card__tab.className = "teacher_tag";
                teacher_card__tab.style.backgroundColor="#f99d43";
                img_size_width=img_size_width-box_size_map.get(techer_subject_obj.length);
                if(techer_subject_obj==="管理员")teacher_card__tab.style.backgroundColor="#fa4b5b";
                class_card_div.appendChild(teacher_card__tab);
                teacher_card__tab.style.left=`${img_size_width}px`;
                teacher_card__tab.style.top=`${img_size_height}px`;
                //卡片margin
                img_size_width=img_size_width-5;
                console.log(img_size_width);
                if (img_size_width<40){
                    img_size_height=img_size_height-27;
                    img_size_width=138;
                }
                teacher_card__tab.innerHTML=techer_subject_obj;
  
            }
            
            //老师卡片图片
            let img = document.createElement("img");
            //img.className = "education_management-card__images_tab";
            img.src = this.img_path;
            class_card_div.appendChild(img)
           //老师h4
           let teacher_card__name = document.createElement("h4");
           teacher_card__name.innerHTML=this.teacher_name;
           teacher_card__name.style.textAlign="center";
           li_class_card.appendChild(teacher_card__name);
        }
    }
    if (typeof this.addFirstElementCard != "function") {
        findClassCard.prototype.addFirstElementCard = function () {
            let ul = document.getElementById(this.ul_id);
            let li_class_card = document.createElement("li");
            ul.appendChild(li_class_card);
            //老师资料大盒子

            let class_card_div = document.createElement("div");
            class_card_div.className = "courses_tutor";

            li_class_card.appendChild(class_card_div );
            
            //每个标签的位置
            let distance_left=0;
            let distance_top=5;
            let box_size_map=new Map()
            box_size_map.set(2,35);
            box_size_map.set(3,47);
            box_size_map.set(4,58);
            box_size_map.set(5,71);
            //换行标记
            let next=true;
            for (const techer_subject_obj of this.teacher_Subject){
                //老师文字盒子
                let teacher_card__tab = document.createElement("div");
                teacher_card__tab.className = "teacher_tag";
                teacher_card__tab.style.backgroundColor="#f99d43"; 
                distance_left=distance_left+5;
                //超出盒子宽度大小换行
                if (distance_left>90){
                    distance_top=distance_top+27;
                    distance_left=5;
                }
                teacher_card__tab.innerHTML=techer_subject_obj;
                teacher_card__tab.style.left=`${distance_left}px`;
                teacher_card__tab.style.top=`${distance_top}px`;
                if(next===true){
                    teacher_card__tab.style.backgroundColor="#f96543" ;
                    next=false;
                }
                distance_left=distance_left+box_size_map.get(techer_subject_obj.length);
                class_card_div.appendChild(teacher_card__tab);
                
            }
           //老师h4
           
           let teacher_card__name = document.createElement("h4");
           teacher_card__name.innerHTML=this.teacher_name;
           teacher_card__name.style.textAlign="center";
           li_class_card.appendChild(teacher_card__name);
        }
    }
}
//创建学生卡片
function findStudentCard(ul_id,student_name, img_path) {
    this.ul_id = ul_id;
    this.student_name = student_name;
    this.img_path = img_path;

    
    if (typeof this.addStudentElementCard != "function") {
        findStudentCard.prototype.addStudentElementCard= function () {
            let ul = document.getElementById(this.ul_id);
            console.log(ul);
            let li_class_card = document.createElement("li");
            ul.appendChild(li_class_card);
            //老师资料大盒子
            let class_card_div = document.createElement("div");
            
            class_card_div.className = "courses_tutor";
            li_class_card.appendChild(class_card_div );
           
            
            //老师卡片图片
            let img = document.createElement("img");
            //img.className = "education_management-card__images_tab";
            img.src = this.img_path;
            class_card_div.appendChild(img)
           //老师h4
           let student_card__name = document.createElement("h4");
           student_card__name.innerHTML=this.student_name;
           student_card__name.style.textAlign="center";
           li_class_card.appendChild(student_card__name);
        }
    }
    
}
//创建家长卡片
function findParentCard(ul_id,parent_name, img_path,student_name) {
    this.ul_id = ul_id;
    this.parent_name = parent_name;
    this.img_path = img_path;
    this.student_name=student_name;

    
    if (typeof this.addParentElementCard != "function") {
        findParentCard.prototype.addParentElementCard= function () {
            let ul = document.getElementById(this.ul_id);
            console.log(ul);
            let li_class_card = document.createElement("li");
            ul.appendChild(li_class_card);
            //老师资料大盒子
            let class_card_div = document.createElement("div");
            
            class_card_div.className = "courses_tutor";
            li_class_card.appendChild(class_card_div );
           //学生名字盒子
         
           let box_size_map=new Map()
           box_size_map.set(2,35);
           box_size_map.set(3,47);
           box_size_map.set(4,58);
           box_size_map.set(5,71);
           let img_size_width=138;
           let img_size_height=96;
           let teacher_card__tab = document.createElement("div");
           teacher_card__tab.className = "teacher_tag";
           teacher_card__tab.style.backgroundColor="#f99d43";
           img_size_width=img_size_width-box_size_map.get(this.student_name.length);

           class_card_div.appendChild(teacher_card__tab);
           teacher_card__tab.style.left=`${img_size_width}px`;
           teacher_card__tab.style.top=`${img_size_height}px`;


           teacher_card__tab.innerHTML=this.student_name;
            //老师卡片图片
            let img = document.createElement("img");
            //img.className = "education_management-card__images_tab";
            img.src = this.img_path;
            class_card_div.appendChild(img)
           //老师h4
           let parent_card__name = document.createElement("h4");
           parent_card__name.innerHTML=this.parent_name;
           parent_card__name.style.textAlign="center";
           li_class_card.appendChild(parent_card__name);
        }
    }
    
}
function fuzzyQuery(list, keyWord) {
    var reg =  new RegExp(keyWord);
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (reg.test(list[i])) {
        arr.push(list[i]);
      }
    }
    return arr;
}

export { findClassCard,findStudentCard,findParentCard,fuzzyQuery};