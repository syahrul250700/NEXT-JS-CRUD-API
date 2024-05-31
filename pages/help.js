import Layout from "@/components/layout";

export default function Help(){
    // 	const [help, setHelp] = useState(false);
    return (
        <Layout>
        <div className="container flex flex-col items-start h-screen">
            <title>NASH | Help</title>
            <h3>How to play?</h3><br/>
            <p>This is a simple game of memory. You have four cards displayed on the screen
                and you need to find matching pairs by flipping over two hidden cards at a time.
                When you click on one card, it will open showing its symbol. If another card with
                the same symbol is already opened, then this pair becomes visible and all other
                cards are closed again. However if no match is found or both cards are already shown,
                they will stay open - signifying that there was no match. The goal is to find as
                many matches as possible within the given time.</p><br/>
                <ul>
                    <li>Click on any card to reveal its symbol. </li>
                    <li>If a match is found, the symbols will be aligned vertically. Click
                        on them again to hide them.</li>
                        <li>The first player who finds all pairs wins the game. The timer shows how
                            much time remains for each turn. A faster player can win more points.</li>
                            <li>You can pause the game by clicking on the clock icon in the top right
                                corner.</li>
                                <li>To reset the game simply click on the New Game button located
                                    below the score board.</li>
                </ul>
        </div>
        </Layout>
    )
    
}