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

## Printing

After the files are ctreated you can open them using Chrome or Firefox and print them using the "ctrl+P" shortcut.
Click on more options:
- Choose A4 for paper size
- Scalse should be at 100
- Pages per sheet 1
- margins None

in Firefox

- disable  `Print headers and footers`
- disable  `Print backgrounds`

in Chrome

- disable `Background graphics`