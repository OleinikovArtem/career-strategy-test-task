import Button from '../ui/button';
import Input from '../ui/input';
import Textarea from '../ui/textarea';

export default function BookForm({ onSubmit }) {
  return (
    <form
      className="py-11 px-14 border border-gray-lightest rounded-2xl flex flex-col gap-6 justify-center"
      onSubmit={onSubmit}
    >
      <header className="flex flex-col gap-2">
        <h3 className="font-semibold text-xl">Book your campervan now</h3>
        <p className="text-dark-tertiary">Stay connected! We are always ready to help you.</p>
      </header>

      <div className="flex flex-col gap-[14px]">
        <Input name="name" type="text" placeholder="Name*" required />
        <Input name="email" type="email" placeholder="Email*" required />
        <Input name="booking-date" type="text" placeholder="Booking date*" required />
        <Textarea name="comment" placeholder="Comment" rows={3} />
      </div>

      <Button type="submit">Send</Button>
    </form>
  );
}
