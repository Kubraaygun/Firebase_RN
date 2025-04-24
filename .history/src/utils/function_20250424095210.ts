const convertFullName = (name: string, surname: string) => {
  return name + ' ' + surname;
};

function getInitials(firstName: string, lastName: string): string {
  const firstInitial = firstName?.charAt(0)?.toUpperCase();
  const lastInitial = lastName?.charAt(0)?.toUpperCase();
  return `${firstInitial}${lastInitial}`;
}
export {convertFullName, getInitials};
