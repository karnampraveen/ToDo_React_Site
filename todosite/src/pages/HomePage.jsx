// import context for toggle BG color

import ToggleBGComp from '../components/ToggleBGComp'
import { ThemeProvider } from '../context/ToggleBGContext';

const HomePage = () => {
    return (
        <div style={{ background: 'blue' }}>
            <h1>This is Home page</h1>

            <ThemeProvider>
                <ToggleBGComp />
            </ThemeProvider>

        </div>
    );
}

export default HomePage