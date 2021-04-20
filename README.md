# Stick It

## Command syntax
```bash
stickit.exe <xlsx_file_path> <output_folder_path>
```
## Parameters
| parameters        | explanation           |
|:------------- |:-------------|
| *xlsx file path*     | the file to process |
| *output folder path*     | the output directory (optional)      |


## CLI examples

```bash
stickit.exe ./doc.xlsx
stickit.exe doc.xlsx out
stickit.exe ./folders/doc.xlsx ./out
```
The fisrt example will create a new folder in the current directory named folowing this pattern `dd_mm_yyyy_hh_m`

## Special cases

If you passed a path as the second argument:

```bash
stickit.exe ./folders/doc.xlsx ./folder2/out
```

The application only creates the final folder of the path, in this case `out`, the base path in this case `folder2` should be created by you

## Prerequisites

Make sure that the mark column in the xlscx file is named `Assembly Mark`