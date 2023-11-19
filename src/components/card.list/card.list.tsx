import { useEffect } from 'react';
import { useThings } from '../../hooks/use.things';
import { Add } from '../add/add';
import { Card } from '../card/card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export function CardList() {
  const { things, status } = useSelector((state: RootState) => state.things);
  const { loadThings } = useThings();

  useEffect(() => {
    loadThings();
  }, [loadThings]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <p>Ups, there was an error loading your learned things list.</p>;
  }

  return (
    <div>
      <Add></Add>
      <ul>
        {things.map((thing) => (
          <Card key={thing.id} thing={thing}></Card>
        ))}
      </ul>
    </div>
  );
}
