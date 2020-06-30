// Formats the URL into a more readable parameter
export const formatTitleURLParam = title => {
  console.log(typeof title)
  return title.trim().toLowerCase().replace(/ /g, "-")
}
