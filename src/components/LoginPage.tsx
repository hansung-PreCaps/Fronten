import React from "react";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Pic&Talk</h1>
        <form
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label>
              아이디
              <input
                type="text"
                name="username"
                style={{ display: "block", width: "100%", marginTop: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              비밀번호
              <input
                type="password"
                name="password"
                style={{ display: "block", width: "100%", marginTop: "5px" }}
              />
            </label>
          </div>
          <button
            type="submit"
            style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          >
            로그인
          </button>
        </form>
        <div style={{ marginTop: "10px" }}>
          <a href="#">비밀번호 찾기</a> | <a href="#">아이디 찾기</a> |{" "}
          <a href="#">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
