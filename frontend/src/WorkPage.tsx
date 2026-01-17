import { useState, useEffect } from 'react'
import Work from './Work.tsx'


interface Work {
    id: number;
    title: string;
    tech_stack: string;
    description: string;
    link_url: string | null;
    image_path:string | null;
    created_at: string;
}

function WorkPage() {
    // DBから取得したデータを保存するステート
    const [works, setWorks] = useState<Work[]>([]);

    // ページが表示された時に一度だけ実行
    useEffect(() => {
        fetch("http://localhost:5000/api/works")
        .then(res => res.json())
        .then(data => setWorks(data))
        .catch(err => console.error("データ取得エラー:", err));
    },[])

    return (
        <>
            <div>
                <h1>HERE IS MY WORK PAGE !</h1>

                <div className="works-container">
                    {works.map((work) => (
                        <div key={work.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                            <h3>{work.title || "(タイトルなし)"}</h3>
                            <p><strong>技術スタック:</strong>{work.tech_stack}</p>
                            <p><strong>説明:</strong> {work.description}</p>
                            {work.link_url && <p><a href={work.link_url} target="_blank">リンク</a></p>}
                            {work.image_path && <img src={work.image_path} alt={work.title} style={{maxWidth: '200px'}} />}
                            <p><small>作成日時: {new Date(work.created_at).toLocaleString()}</small></p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkPage
