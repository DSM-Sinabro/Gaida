const fs = require('fs'),
  formidable = require('formidable'),
  path = require('path');

const upload_path = 'public/resources/images/';
// const upload_path = '/Users/gilsangwoo/Documents/devlop/Gaida/Gaida_Server/public/images/';
const guid = () => {
  const s4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  );
};
exports.guide = (req, res) => {
  let form = new formidable.IncomingForm();
  form.maxFieldsSize = 10000 * 1024 * 1024;
  form.parse(req, function(err, fields, files) {
    if (err) {
      res.status(404).json({
        success: false
      });
    }
    const { title, desc, guider } = fields;
    if (!(title || desc || guider || files.video || files.image)) {
      res.status(404).json({
        success: false
      });
    }
    const oldvideopath = files.video.path;
    const oldimagepath = files.image.path;
    const videoUuid = guid();
    const imageUuid = guid();
    const videopath =
      upload_path + videoUuid + path.parse(files.video.name).ext;
    const imagepath =
      upload_path + imageUuid + path.parse(files.image.name).ext;

    try {
      fs.renameSync(oldvideopath, videopath);
      fs.renameSync(oldimagepath, imagepath);
      res.status(200).json({
        success: true,
        message: 'success upload'
      });
    } catch (err) {
      if (err.code === 'ENOENT') {
        res.send('file not found');
      } else {
        res.send(err);
      }
    }
  });
};
exports.getGuide = (req, res) => {
  console.log('inner');
  const path = upload_path + req.param.id;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': path.parse(path).ext
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4'
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
};
