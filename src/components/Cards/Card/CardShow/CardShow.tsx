import { format } from 'date-fns';

const CardShow = ({ released, genres }: any) => {
  const genresView = genres.map((genre: any, i: any) => genre.name).join(', ');
  const formattedReleaseDate = format(new Date(released), 'MMM dd, yyyy');

  return (
    <div className="mt-5">
      <div className="card-show__item">
        <p className="text-[#ccc9] text-[13px]">Release date:</p>
        <p className="text-[13px]">{formattedReleaseDate}</p>
      </div>
      <div className="card-show__item">
        <p className="text-[#ccc9] text-[13px]">Genres:</p>
        <p className="text-[13px]">{genresView}</p>
      </div>
    </div>
  );
};

export default CardShow;
