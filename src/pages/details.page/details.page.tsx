import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function Details() {
  const { idOfThing } = useParams();
  const { things } = useSelector((state: RootState) => state.things);
  console.log(idOfThing);

  const thing = things.find((item) => String(item.id) === idOfThing);

  return (
    <div>
      <h2>More details about that thing you've learned:</h2>
      <p>ID: {thing?.id}</p>
      <p>You've learned {thing?.thing}</p>
    </div>
  );
}
