function readJsonFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    //rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function creatationCard(ul_id,grade_name, class_name,tutor_name, student_number, img_path,class_id) {
    this.ul_id = ul_id;
    this.grade_name  = grade_name;
    this.class_name = class_name;
    this.tutor_name = tutor_name;
    this.student_number = student_number;
    this.img_path = img_path;
    this.class_id=class_id;
    if (typeof this.addElementCard != "function") {
        creatationCard.prototype.addElementCard = function () {
            let ul = document.getElementById(this.ul_id);
            
            let li_education_card = document.createElement("li");
            ul.appendChild(li_education_card);
            //行政班大盒子
            let education_card_div = document.createElement("div");
            //跳转到我的班级
            education_card_div.value=this.class_id;
            education_card_div.addEventListener("click", function () {
                localStorage.removeItem("class_id");
   
                localStorage.setItem("class_id",education_card_div.value);
                window.location.href = "http://127.0.0.1:5500/findMyclass.html";
               
            });
            education_card_div.className = "education_management-card-item";
            li_education_card.appendChild(education_card_div);
            //行政班文字盒子
            let education_card__tab = document.createElement("div");
            education_card__tab.className = "education_management-card__tab";
            education_card_div.appendChild(education_card__tab);
            //行政班文字
            let ul_characters = document.createElement("ul");
            education_card__tab.appendChild(ul_characters);
            //学校名字
            let li_characters_shcool = document.createElement("li");
            li_characters_shcool.className = "li_grade_stlye";
            li_characters_shcool.innerHTML = this.grade_name;
            ul_characters.appendChild(li_characters_shcool);
            //班级名字
            let li_characters_class = document.createElement("li");
            li_characters_class.className = "li_grade_stlye";
            ul_characters.appendChild(li_characters_class);
            let span_characters_class = document.createElement("span");
            span_characters_class.className = "education_management-card__tab_myclass";
            span_characters_class.innerHTML = "班级：";
            let span_characters_class_name = document.createElement("span");
            span_characters_class_name.className = "education_management-card__tab_myclasscontent";
            span_characters_class_name.innerHTML = this.class_name ;
            li_characters_class.appendChild(span_characters_class);
            li_characters_class.appendChild(span_characters_class_name);
            //班主任
            let li_characters_totor = document.createElement("li");
            li_characters_totor.className = "li_grade_stlye";
            ul_characters.appendChild(li_characters_totor);
            let span_characters_totor = document.createElement("span");
            span_characters_totor.className = "education_management-card__tab_tutor";
            span_characters_totor.innerHTML = "班主任：";
            let span_characters_totor_name = document.createElement("span");
            span_characters_totor_name.className = "education_management-card__tab_tutorcontent";
            span_characters_totor_name.innerHTML = this.tutor_name;
            li_characters_totor.appendChild(span_characters_totor);
            li_characters_totor.appendChild(span_characters_totor_name);

            //学生人数
            let li_characters_student = document.createElement("li");
            li_characters_student.className = "li_grade_stlye";
            ul_characters.appendChild(li_characters_student);
            let span_characters_student = document.createElement("span");
            span_characters_student.className = "education_management-card__tab_student";
            span_characters_student.innerHTML = "学生人数：";
            let span_characters_student_number = document.createElement("span");
            span_characters_student_number.className = "education_management-card__tab_studentcontent";
            span_characters_student_number.innerHTML = this.student_number;
            li_characters_student.appendChild(span_characters_student);
            li_characters_student.appendChild(span_characters_student_number);
            //行政班卡片图片盒子
            let education_card__img = document.createElement("div");
            education_card__img.className = "education_management-card__images";
            education_card_div.appendChild(education_card__img);
            //行政班卡片图片
            var img = document.createElement("img");
            img.className = "education_management-card__images_tab";
            img.src = this.img_path;
            education_card__img.appendChild(img)
        }
    }
    if (typeof this.addElementIcon != "function") {
        creatationCard.prototype.addElementIcon = function (img_first,image_second) {
        
            let ul = document.getElementById(this.ul_id);
            console.log(ul);
            let li_education_card = document.createElement("li");
            ul.appendChild(li_education_card);
            li_education_card.className = "class-management-list_item__nor";
            let em_first = document.createElement("em");
            let em_second = document.createElement("em");
            //增加图标
            let images_em_first = document.createElement("img");
            let images_em_second = document.createElement("img")
            images_em_first.src = img_first;
            em_first.className = "setting_icon_tab";
            
            images_em_second.src = image_second;
            em_second.className = "key_icon_tab";
            li_education_card.appendChild(em_first);
            em_first.appendChild(images_em_first);
            li_education_card.appendChild(em_second);
            em_second.appendChild(images_em_second);
            //行政班大盒子
            let education_card_div = document.createElement("div");
            education_card_div.className = "class_management-card-item";
            li_education_card.appendChild(education_card_div);
            //行政班文字盒子
            let education_card__tab = document.createElement("div");
            education_card__tab.className = "class_management-card__tab";
            education_card_div.appendChild(education_card__tab);
            //行政班文字
            let ul_characters = document.createElement("ul");
            education_card__tab.appendChild(ul_characters);
            //学校名字
            let li_characters_shcool = document.createElement("li");
            li_characters_shcool.className = "li_grade_stlye";
            li_characters_shcool.innerHTML = this.grade_name;
            ul_characters.appendChild(li_characters_shcool);
            //班级名字
            let li_characters_class = document.createElement("li");
            li_characters_class.className = "li_grade_stlye";
            ul_characters.appendChild(li_characters_class);
            let span_characters_class = document.createElement("span");
            span_characters_class.className = "class_management-card__tab_myclass";
            span_characters_class.innerHTML = "班级：";
            let span_characters_class_name = document.createElement("span");
            span_characters_class_name.className = "class_management-card__tab_myclasscontent";
            span_characters_class_name.innerHTML = this.class_name;
            li_characters_class.appendChild(span_characters_class);
            li_characters_class.appendChild(span_characters_class_name);
            //班主任
            let li_characters_totor = document.createElement("li");
            li_characters_totor.className = "li_grade_stlye";
            ul_characters.appendChild(li_characters_totor);
            let span_characters_totor = document.createElement("span");
            span_characters_totor.className = "class_management-card__tab_tutor";
            span_characters_totor.innerHTML = "班主任：";
            let span_characters_totor_name = document.createElement("span");
            span_characters_totor_name.className = "class_management-card__tab_tutorcontent";
            span_characters_totor_name.innerHTML = this.tutor_name;
            li_characters_totor.appendChild(span_characters_totor);
            li_characters_totor.appendChild(span_characters_totor_name);

            //学生人数
            let li_characters_student = document.createElement("li");
            li_characters_student.className = "li_grade_stlye";
            ul_characters.appendChild(li_characters_student);
            let span_characters_student = document.createElement("span");
            span_characters_student.className = "class_management-card__tab_student";
            span_characters_student.innerHTML = "学生人数：";
            let span_characters_student_number = document.createElement("span");
            span_characters_student_number.className = "class_management-card__tab_studentcontent";
            span_characters_student_number.innerHTML = this.student_number;
            li_characters_student.appendChild(span_characters_student);
            li_characters_student.appendChild(span_characters_student_number);
            //行政班卡片图片盒子
            let education_card__img = document.createElement("div");
            education_card__img.className = "class_management-card__images";
            education_card_div.appendChild(education_card__img);
            //行政班卡片图片
            var img = document.createElement("img");
            img.className = "class_management-card__images_tab";
            img.src = this.img_path;
            education_card__img.appendChild(img)
        }
    }
}

export { readJsonFile, creatationCard};