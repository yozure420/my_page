import './Profile.css'

function Profile(){
    return(
        <>
        <div className="frame">
            <h1 id="profile">My Profile</h1>
            <div className="frame2">
                <div className="flex"><h3>Name:</h3><h3>yozure(よづれ)</h3></div>
                <div className="flex"><h3>Age:</h3><h3>23歳  エンジニア学生2年め</h3></div>
                <p> 
                    どうも、よづれです。多趣味に生きてる人間です。
                    <br />
                    VRと卵かけご飯
                </p>
            </div>
        </div>
        </>
    );
};

export default Profile