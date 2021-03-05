// JavaScript source code
function creatationClass(class_id, shcool_name, phase_studying, grade, class_name, class_type, exit_permission_setting) {
    this.class_id = class_id;
    this.shcool_name = shcool_name;
    this.phase_studying = phase_studying;
    this.grade = grade;
    this.class_name = class_name;
    this.class_type = class_type;
    this.exit_permission_setting = exit_permission_setting;
    //设置classID
    if (typeof this.changeClassID != "function") {
        creatationClass.prototype.changeClassID = function (class_id) {
            this.class_id = class_id;
        }
    }
    //检查学校名
    if (typeof this.checkShcoolName != "function") {
        creatationClass.prototype.checkShcoolName = function (name) {
            if (name.length == 0) {
                alert("你好，默认学校是黑牛学堂");
                this.shcool_name = "黑牛";
                return true;
            }
        }
    }
    //检查学段
    if (typeof this.checkPhaseStuding != "function") {
        creatationClass.prototype.checkPhaseStuding = function (condition_phase_studing) {
            if (this.phase_studying == condition_phase_studing) {
                alert("你需要选择学段，否则不能创建班级");
                return false;
            }
            else {
                return true;
            }
        }
    }
    //检查年级
    if (typeof this.checkGrade != "function") {
        creatationClass.prototype.checkGrade = function (condition_grade) {
            if (this.grade == condition_grade) {
                alert("你需要选择年级，否则不能创建班级");
                return false;
            }
            else {
                return true;
            }
        }
    }
    //检查班级名
    if (typeof this.checkClassName != "function") {
        creatationClass.prototype.checkClassName = function () {
            let regex = /[?_]/;

            if (regex.test(this.class_name) == true || this.class_name.length==0) {
                alert("不好意思，你的班级可能没有输入或者班级名包含了?_");
                return false;
            }
            else {
                return true;
            }
        }
    }
    //检查类型
    if (typeof this.checkType != "function") {
        creatationClass.prototype.checkType = function () {

            if (this.class_type.length == 0) {
                this.class_type = "行政班";
                alert("不好意思，你的班级类型可能没有输入，自动保存为行政班");
                return false;
            }
 
            
        }
    }
     //检查退出权限
    if (typeof this.checkRight != "function") {
        creatationClass.prototype.checkRight = function () {

            if (this.exit_permission_setting.length == 0) {
                this.exit_permission_setting = "允许退出";
                alert("不好意思，你的退出权限设置可能没有输入，自动保存为允许退出");
                return false;
            }
        }
    }
}
function checkStorage() {

    return JSON.stringify(window.localStorage) == "{}" ? false : true;
};
export { creatationClass,checkStorage};
