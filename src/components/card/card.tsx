import { Link } from 'react-router-dom';
import { useThings } from '../../hooks/use.things';
import { Thing } from '../../models/things.model';

type Props = {
  thing: Thing;
};

export function Card({ thing }: Props) {
  const { deleteThing } = useThings();

  const handleDelete = () => {
    deleteThing(thing.id);
  };

  return (
    <li className="thing-card">
      <p>ID: {thing.id}</p>
      <p>Thing i've learned: {thing.thing}</p>
      <p role="button" onClick={handleDelete}>
        ❌
      </p>
      <p>
        <Link to={'/details/' + thing.id}>More details</Link>
      </p>
    </li>
  );
}
