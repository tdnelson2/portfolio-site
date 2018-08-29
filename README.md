# Portfolio Website
A page to showcase my work. It is live [here](http://timothynelson.me/).

### Requirements

* [ImageMagick](https://www.imagemagick.org/script/download.php#macosx) is required to use the Grunt script to build the responsive images. The installation process is quite lengthy so I included them in the repo. If you don't need/want to rebuild the images, disregard the following:

Installation (macOS):
  * Make sure [Xcode and the Xcode Command Line Tools](https://guide.macports.org/#installing.xcode) are installed.
  * Downlaod and install [MacPorts](https://www.macports.org/install.php).
  * In a terminal run `sudo port install ImageMagick` to install ImageMagick. Be patient. Installation can take several minutes.

### Development
* In a terminal `cd` into the project directory and run one of the following commands to launch the server. Page will be visible at [http://localhost:8000](http://localhost:8009/).

##### Python 2.x dev server
* `python -m SimpleHTTPServer 8000`

##### Python 3.x dev server
* `python3 -m http.server 8000`