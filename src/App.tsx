import { DispayComponent } from './components/DisplayComponent';
import { FormList } from './components/FormList';

function App() {
  return (
    <>
      <h1 className="text-center text-white text-4xl text-bold font-mono mt-6">React Assignment-1</h1>
      <DispayComponent />
      <hr className="h-1 mx-40 my-3 text-gray-500 bg-gray-800 rounded-lg" />
      <FormList />
    </>
  );
}

export default App;
