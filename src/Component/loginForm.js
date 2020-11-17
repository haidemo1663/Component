import React from "react";
import "./header.css";
class loginForm extends React.Component {
  constructor(props) {
    super(props);
    //Khởi tạo state chứa giá trị của input
    this.state = {
      email: "",
      password: ""
    };
  }
  changeInputValue(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  validationForm() {
    let returnData = {
      error : false,
      msg: ''
    }
    const {email, password} = this.state
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }
    //Kiểm tra password
    if(password.length < 8) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 8 ký tự'
      }
    }
    return returnData;
  }
  submitForm(e) {
    //Chặn các event mặc định của form
    e.preventDefault();
 
   //Gọi hàm validationForm() dùng để kiểm tra form
    const validation = this.validationForm()
 
    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    }else{
      alert('Submit form success')
    }
  }
  render() {
    return (
      <div className="container">
        <form
          onSubmit={e => {
            this.submitForm(e);
          }}
        >
          <div className="form-group">
            <label htmlFor="user-mail">Username:</label>
            <input
              type="text"
              className="form-control"
              name="email" id ="user-mail"
              placeholder="Enter email"
              onChange={e => this.changeInputValue(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password" id="pwd"
              placeholder="Enter password"
              onChange={e => this.changeInputValue(e)}
            />
          </div>
          <button type="submit" className="btn-primary-submit">
            Signid to Coderx-X
          </button>
          <div class="check-signin">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Keep me sign in</label>
            </div>
          <div className="forgot-content">
              <a href="https://school.coders-x.com/curriculums/5efb0113ff7dbb044ab0af81/courses/5e6321798aa9b35da5795282/lessons/5e6321798aa9b35da579534a" className="forgot-name">Forgot username?</a>
              <a href="https://school.coders-x.com/curriculums/5efb0113ff7dbb044ab0af81/courses/5e6321798aa9b35da5795282/lessons/5e6321798aa9b35da579534a" className="forgot-pwd">Forgot password?</a>
          </div>
        </form>
      </div>
    );
  }
}

export default loginForm;