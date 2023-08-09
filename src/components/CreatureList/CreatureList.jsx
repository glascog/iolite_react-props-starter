import CreatureItem from "./CreatureItem";

function CreatureList({ creatureList }) {
  return (<ul>
    {creatureList.map(creature => (
      // List items render below, for each creature
      <CreatureItem key={creature.id} creatureProp={creature} />
    )
    )}
  </ul>);
}

export default CreatureList