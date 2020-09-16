<input type="file" onchange="showFile(this)">

<script>
function showFile(input) {
    let file = input.files[0];

    alert("File name: ${file.name}");
    alert("Last modified: ${file.lastModified}");
}
</script>
