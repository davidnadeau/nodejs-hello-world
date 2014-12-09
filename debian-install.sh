# set password for admin 
sudo passwd root
HOME=/home/admin/

# setup tools
sudo apt-get update
sudo apt-get install -y build-essential vim curl git

# load vim and bash preferences
git clone https://github.com/davidnadeau/dot-files.git
mv dot-files/.vimrc $HOME 
cat dot-files/.bashrc >> $HOME.bashrc
rm -rf dot-files

# install nodejs
curl -sL https://deb.nodesource.com/setup | bash -
sudo apt-get install -y nodejs

# install and start mongodb
sudo apt-get install mongodb
sudo service mongodb start

