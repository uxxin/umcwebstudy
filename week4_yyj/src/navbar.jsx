export default function Navbar(){
    function login(e){
        if(e.target.innertext==="로그인"){
            e.target.innerText="로그아웃";
        }
        else(){
            e.target.innerText="로그인";
        }
    }
    return(
        <Nav>
            {/* 내용채우기 */}
        </Nav>

    )
}